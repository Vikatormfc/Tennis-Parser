FROM python:3.13-slim

ENV PYTHONUNBUFFERED True

COPY . ./

ENV PORT 8000

RUN pip install --no-cache-dir -r requirements.txt

# As an example here we're running the web service with one worker on uvicorn.
CMD exec uvicorn main:app --host 0.0.0.0 --port ${PORT} --workers 1