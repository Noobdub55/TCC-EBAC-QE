export const options = {
 stages: [
   { duration: '20s', target: 20 },
   { duration: '2m', target: 20 },
   { duration: '10s', target: 0 },
],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    checks: ['rate>0.95'],
  },
};