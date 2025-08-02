import pandas as pd
from caseconverter import kebabcase
import os
from fastapi import FastAPI, HTTPException, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from spa_static_files import SPAStaticFiles

api = APIRouter(
    prefix="/api",
    tags=["api"]
)

@api.get("/rankings/server")
def read_rankings_server():
    rankings = pd.read_csv("./Data/server_rankings.csv")
    return {"rankings": rankings.to_dict(orient="records")}


@api.get("/players")
def read_player_list():
    df = pd.read_csv("./Data/player_dashboard.csv")
    df["slug"] = df["player"].apply(kebabcase)
    players = df[["slug", "player"]].to_dict(orient="records")
    return {"players": players}


@api.get("/players/{player_slug}")
def read_player(player_slug: str):
    df = pd.read_csv("./Data/player_dashboard.csv")
    df["slug"] = df["player"].apply(kebabcase)
    player_data = df[df["slug"] == player_slug]

    if player_data.empty:
        raise HTTPException(status_code=404, detail="Player not found")

    return {"player": player_data.to_dict(orient="records")[0]}

app = FastAPI()

# TODO: Configure origin whitelist using env vars
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(api)

app.mount("/", SPAStaticFiles(directory="client/dist", html=True), name="client")

