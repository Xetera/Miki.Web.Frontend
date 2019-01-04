FROM nginx
COPY dist /usr/share/nginx/html

RUN chmod +w /etc/nginx/nginx.conf
ADD default.conf /etc/nginx/conf.d/default.conf
