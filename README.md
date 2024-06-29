# Line Notification Gateway #
Line notification gateway for Alertmanager (Prometheus).
## Usage ##
### 1. Setup run local
```shell
add .env 
HOST=localhost
PORT=3000
```
```shell
npm install
```
```shell
npm start
```
### 2. Setup run docker
```shell
docker-compose up -d
```
### 3. Set receiver webhook from Alertmanager.
```yaml
receivers:
  - name: 'line'
    webhook_configs:
      - url: 'http://localhost:3000/api/webhook'
        http_config:
          bearer_token: '« YOUR_LINE_API_TOKEN »'
```
