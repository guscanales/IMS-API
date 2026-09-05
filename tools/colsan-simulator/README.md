# Colsan datapoint simulator

Throwaway load generator written for the Colsan deployment (Smart-Things, 2017).
Walks a value 0→10→0 and POSTs a datapoint every ~10s to `/api/Devices/add-datapoint`
with a random `tonelaje`.

The hardcoded host (`159.203.114.208:3000`) was the Colsan droplet and is long gone —
point `URL` at a live IMS-API instance before running.

```
npm install request
node simulate.js
```

Recovered from Google Drive 2026-09-05 and committed here so the last bit of IMS
source stops living in a documents folder.
