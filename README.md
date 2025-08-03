- /admin for client list
- node mailer for contact form
- deploy to server:
  go to project folder and run:
  - rsync -avz --progress .next/standalone/ root@161.35.22.48:/var/www/etautosvara.lt/
  - rsync -avz --progress public/ root@161.35.22.48:/var/www/etautosvara.lt/public/
  - rsync -avz --progress .next/static/ root@161.35.22.48:/var/www/etautosvara.lt/.next/static/
  - also make zohoverify folder and put verification html inside
  - add .env file
  - restart pm2
