all: static/scores.json

static/scores.json: scores.yml
	yq eval -o=json scores.yml |jq '[to_entries[] | {score: (.key | tonumber), next: .value}]' > $@

start:
	npm start