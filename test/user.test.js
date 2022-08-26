import User from '../src/database/services/user.service';
import { connect, disconnect } from '../src/database/dbConnect.js';
import { encryptPassword } from '../src/controllers/helperFunctions/userHelpers/passwordHandlers';
import { requestRoute } from './helperTestFunctions/requestRoute.js';
import { expectAbstraction } from './helperTestFunctions/expectAbstraction.js';

let id, token;
const fakeId = 96816518918;
const fakeToken = 'thisisafaketokenfortesting16518916';

describe('test the DevilzApp API', () => {
	beforeAll(async () => {
		// Create a test user
		await connect();

		const password = await encryptPassword('okay');

		const user = {
			name: 'admin',
			email: 'admin@admin.com',
			password,
		};

		await User.createUser(user);
	});

	afterAll(async () => {
		await User.deleteUser({ email: 'admin@admin.com' });

		disconnect();
	});

	describe('POST/login', () => {
		it('should authenticate the user and sign in', async () => {
			const user = {
				email: 'admin@admin.com',
				password: 'okay',
			};

			const res = await requestRoute(user, '/auth/login');

			token = res.body.token;

			expectAbstraction(res, 200, {token});
		});

		it('should not sign in, password cannot be empty', async () => {
			const user = {
				email: 'admin@admin.com',
				password: '',
			};

			const res = await requestRoute(user, '/auth/login');

            const expectedObject = {
                Place: 'Login',
                Error: 'All fields are required',
            }

            expectAbstraction(res, 400, expectedObject);
		});

		it('should not sign in, email cannot be empty', async () => {
			const user = {
				email: '',
				password: 'okay',
			};

			const res = await requestRoute(user, '/auth/login');

            const expectedObject = {
                Place: 'Login',
                Error: 'All fields are required',
            }

            expectAbstraction(res, 400, expectedObject);
		});

		it('should not sign in, incorrect email', async () => {
			const user = {
				email: 'johnny@gmail.com',
				password: 'okay',
			};

			const res = await requestRoute(user, '/auth/login');

            const expectedObject = {
                Place: 'Login',
			    Error: 'User and/or Password incorrect',
            }

            expectAbstraction(res, 400, expectedObject);
		});

		it('should not sign in, incorrect password', async () => {
			const user = {
				email: 'admin@admin.com',
				password: 'johnybegood',
			};

			const res = await requestRoute(user, '/auth/login');

            const expectedObject = {
                Place: 'Login',
				Error: 'User and/or Password incorrect',
            }

            expectAbstraction(res, 400, expectedObject);
		});
	});

	describe('POST/signup', () => {
		it('should create a new user', async () => {
			const user = {
				name: 'johny',
				email: 'johny@gmail.com',
				password: 'johnybegood',
			};

			const res = await requestRoute(user, '/auth/signup');

            const expectedObject = {
                userDisplay: {
                    name: 'johny',
                    email: 'johny@gmail.com',
                },
            }

            expectAbstraction(res, 200, expectedObject);

			await User.deleteUserByEmail({ email: 'johny@gmail.com' });
		});

		it('should not create a new user, user already exists', async () => {
			const user = {
				name: 'admin',
				email: 'admin@admin.com',
				password: 'okay',
			};

			const res = await requestRoute(user, '/auth/signup');

            const expectedObject = {
                Place: 'Creating user',
				Error: 'User already exists',
            }

            expectAbstraction(res, 400, expectedObject);
		});

		it('should not create a new user, name is required', async () => {
			const user = {
				name: '',
				email: 'johny@gmail.com',
				password: 'johnybegood',
			};

			const res = await requestRoute(user, '/auth/signup');

            const expectedObject = {
                Place: 'Creating user',
				Error: 'All fields are required',
            }

            expectAbstraction(res, 400, expectedObject);
		});

		it('should not create a new user, email is required', async () => {
			const user = {
				name: 'johny',
				email: '',
				password: 'johnybegood',
			};

            const res = await requestRoute(user, '/auth/signup');

            const expectedObject = {
                Place: 'Creating user',
				Error: 'All fields are required',
            }

            expectAbstraction(res, 400, expectedObject);
		});

		it('should not create a new user, password is required', async () => {
			const user = {
				name: 'johny',
				email: 'johny@gmail.com',
				password: '',
			};

            const res = await requestRoute(user, '/auth/signup');

            const expectedObject = {
                Place: 'Creating user',
				Error: 'All fields are required',
            }

            expectAbstraction(res, 400, expectedObject);
		});
	});
});
