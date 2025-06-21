from typing import Union
import pandas as pd

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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


@app.get("/rankings/server")
def read_rankings_server():
    rankings = pd.read_csv("./Data/server_rankings.csv")
    return {"rankings": rankings.to_dict(orient="records")}
