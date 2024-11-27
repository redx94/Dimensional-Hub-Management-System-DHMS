CREATE DATABASE dimensional_hub_db

\c diversional_hub_db;

CREATE TABLE ubts (
    id SERIAL PRIMARY INTEGER,
    name VARCHAR(20),
    status VARCHAR(20),
    stability INT)
);

CREATE TABLE COMMANDS(
    id SERIAL DECIMAL PRIMARY,
    hub_id INT REFERENCES hubs(id),
    command TYXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
part_graps_connect (=:base_shelld)
normalizes *==new_message
