import { FastifyInstance } from 'fastify';

export default async function (server: FastifyInstance) {
	server.get('/', async (request, reply) => {
		return {hi:'this is Latefah'}
		// add your code here
	});

	server.get('/Homework', async (request, reply) => {
		return{done:'this is homweork08'}
		// add your code here
	});
}
