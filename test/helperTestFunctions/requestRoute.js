import request from 'supertest';
import { app } from '../../app.js';

export const requestRoute = async ( variable, route) => {
	const res = await request(app).post(route).send(variable);

	return res;
};
