from typing import Union

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

rows = [
    {"id": 1, "lastName": "Snow", "firstName": "Jon", "age": 14},
    {"id": 2, "lastName": "Lannister", "firstName": "Cersei", "age": 31},
    {"id": 3, "lastName": "Lannister", "firstName": "Jaime", "age": 31},
    {"id": 4, "lastName": "Stark", "firstName": "Arya", "age": 11},
    {"id": 5, "lastName": "Targaryen", "firstName": "Daenerys", "age": None},
    {"id": 6, "lastName": "Melisandre", "firstName": None, "age": 150},
    {"id": 7, "lastName": "Clifford", "firstName": "Ferrara", "age": 44},
    {"id": 8, "lastName": "Frances", "firstName": "Rossini", "age": 36},
    {"id": 9, "lastName": "Roxie", "firstName": "Harvey", "age": 65},
]


@app.get("/")
def read_root():
    return {"Cowabunga": "Dude!"}


@app.get("/rankings")
def read_rankings():
    return {"rankings": rows}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
