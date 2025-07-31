FROM node:20-alpine AS builder

WORKDIR /usr/src/app

ENV VITE_API_URL=/api

COPY client/package* ./
RUN npm ci

COPY ./client/ ./
RUN npm run build

FROM python:3.13-slim

RUN apt-get update && \
    apt-get install -y --no-install-recommends curl && \
    rm -rf /var/lib/apt/lists/*

ENV PYTHONUNBUFFERED True

COPY . ./
COPY --from=builder /usr/src/app/dist ./client/

ENV PORT 8000

RUN pip install --no-cache-dir -r requirements.txt

# As an example here we're running the web service with one worker on uvicorn.
CMD exec uvicorn main:app --host 0.0.0.0 --port ${PORT} --workers 1
