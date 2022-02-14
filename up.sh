docker-compose -f ./docker/docker-compose.yml -f ./docker/docker-compose.override.yml up -d --build --force-recreate
npx json-server --watch db.json --port 8080
