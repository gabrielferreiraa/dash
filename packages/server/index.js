import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import routes from './app/routes';
import * as Sentry from '@sentry/node';

Sentry.init({ dsn: process.env.SENTRY_DSN });

const app = express();
const port = 4000;

app.use(Sentry.Handlers.requestHandler());

app.use(compression());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use('/', routes);
app.use(Sentry.Handlers.errorHandler());

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
