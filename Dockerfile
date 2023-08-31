FROM python:3.10-alpine

WORKDIR /app

RUN apk update \
   && apk add postgresql-dev gcc musl-dev jpeg-dev zlib-dev

COPY requirements.txt /app/requirements.txt
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

COPY . .