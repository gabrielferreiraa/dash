import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import routes from './app/routes';

const app = express();
const port = 4000;

app.use(compression());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use('/', routes);

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});
