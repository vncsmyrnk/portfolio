# Stage 1: Base image
FROM node:21-alpine AS base
WORKDIR /var/app/
COPY app/ .
