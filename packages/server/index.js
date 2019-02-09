import express from 'express';
import bodyParser from 'body-parser';
import routes from './app/routes';

const app = express();
const port = 4000;

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
