# Tennis Parser

This project applies cutting edge data science principles to the analysis of professional Tennis athletes. It presents insights into the methods of ranking and comparing players' **Serve Efficiency** and **Return Efficiency**. It also includes a web app, for the interactive presentation of the analysis.

## Development

### Requirements

- Python 3 (backend and data processing)
- Node.js (frontend only)

### Getting Started

To run this project locally, follow these steps:

1. Clone this repo.

```sh
git clone https://github.com/Vikatormfc/Tennis-Parser
cd Tennis-Parser
```

2. (Optional) Create a virtual environment

```sh
python3 -m venv .venv
source .venv/bin/activate
```

**NOTE:** On Windows, the activate is executable

```
venv\Scripts\activate
```

3. Install python dependencies

```sh
pip install -r requirements.txt
```

4. Start the FastAPI dev server

```sh
fastapi dev main.py
```

5. Refer to the [client package README](/client/README.md) for instructions on running the frontend dev server.
