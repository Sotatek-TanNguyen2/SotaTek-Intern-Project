import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as pactum from 'pactum';
import { AppModule } from './../src/app.module';

describe('App (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      })
    );
    await app.init();
    await app.listen(4000);
    pactum.request.setBaseUrl('http://localhost:4000');
  });

  afterAll(async () => {
    await app.close();
  });
  // add
  describe('POST /add', () => {
    it('should return 3 if firstNumber = 1, secondNumber = 2', () => {
      return pactum
        .spec()
        .post('/add')
        .withBody({ firstNumber: 1, secondNumber: 2 })
        .expectStatus(200)
        .expectBody({ result: 3 });
    });
    it('should return 32.57 if firstNumber = 12.45, secondNumber = 20.12', () => {
      return pactum
        .spec()
        .post('/add')
        .withBody({ firstNumber: 12.45, secondNumber: 20.12 })
        .expectStatus(200)
        .expectBody({ result: 32.57 });
    });
    it('should throw error if firstNumber is string', () => {
      return pactum
        .spec()
        .post('/add')
        .withBody({ firstNumber: '123456789123', secondNumber: 2 })
        .expectStatus(400);
    });
    it('should throw error if secondNumber is string', () => {
      return pactum
        .spec()
        .post('/add')
        .withBody({ firstNumber: 123456789123, secondNumber: '2121' })
        .expectStatus(400);
    });
    it('should throw error if firstNumber or secondNumber is BigInt', () => {
      return pactum
        .spec()
        .post('/add')
        .withBody({ firstNumber: 1111111111111111111111111, secondNumber: 2 })
        .expectStatus(400);
    });
  });

  // subtraction
  describe('POST /subtraction', () => {
    it('should return 2 if firstNumber = 4, secondNumber = 2', () => {
      return pactum
        .spec()
        .post('/subtraction')
        .withBody({ firstNumber: 4, secondNumber: 2 })
        .expectStatus(200)
        .expectBody({ result: 2 });
    });
    it('should return -2 if firstNumber = 2, secondNumber = 4', () => {
      return pactum
        .spec()
        .post('/subtraction')
        .withBody({ firstNumber: 2, secondNumber: 4 })
        .expectStatus(200)
        .expectBody({ result: -2 });
    });
    it('should return 24.09 if firstNumber = 39.77, secondNumber = 15.68', () => {
      return pactum
        .spec()
        .post('/subtraction')
        .withBody({ firstNumber: 39.77, secondNumber: 15.68 })
        .expectStatus(200)
        .expectBody({ result: 24.09 });
    });
    it('should return -24.09 if firstNumber = 15.68, secondNumber = 39.77', () => {
      return pactum
        .spec()
        .post('/subtraction')
        .withBody({ firstNumber: 15.68, secondNumber: 39.77 })
        .expectStatus(200)
        .expectBody({ result: -24.09 });
    });
    it('should throw error if firstNumber is string', () => {
      return pactum
        .spec()
        .post('/subtraction')
        .withBody({ firstNumber: '1999', secondNumber: 2409 })
        .expectStatus(400);
    });
    it('should throw error if secondNumber is string', () => {
      return pactum
        .spec()
        .post('/subtraction')
        .withBody({ firstNumber: 1234567892409, secondNumber: '1999' })
        .expectStatus(400);
    });
    it('should throw error if firstNumber or secondNumber is BigInt', () => {
      return pactum
        .spec()
        .post('/subtraction')
        .withBody({ firstNumber: 1111111111111111111111111, secondNumber: 2 })
        .expectStatus(400);
    });
  });
  // multiple 
  describe('POST /multiple', () => {
    it('should return 2 if firstNumber = 1, secondNumber = 2', () => {
      return pactum
        .spec()
        .post('/multiple')
        .withBody({ firstNumber: 1, secondNumber: 2 })
        .expectStatus(200)
        .expectBody({ result: 2 });
    });
    it('should return 19.5 if firstNumber = 13, secondNumber = 1.5', () => {
      return pactum
        .spec()
        .post('/multiple')
        .withBody({ firstNumber: 13, secondNumber: 1.5 })
        .expectStatus(200)
        .expectBody({ result: 19.5 });
    });
    it('should return 27.9946 if firstNumber = 1.39, secondNumber = 20.14', () => {
      return pactum
        .spec()
        .post('/multiple')
        .withBody({ firstNumber: 1.39, secondNumber: 20.14 })
        .expectStatus(200)
        .expectBody({ result: 27.9946 });
    });
    it('should return 250.494 if firstNumber = 12.45, secondNumber = 20.12', () => {
      return pactum
        .spec()
        .post('/multiple')
        .withBody({ firstNumber: 12.45, secondNumber: 20.12 })
        .expectStatus(200)
        .expectBody({ result: 250.494 });
    });
    it('should throw error if firstNumber is string', () => {
      return pactum
        .spec()
        .post('/multiple')
        .withBody({ firstNumber: '123456789123', secondNumber: 2 })
        .expectStatus(400);
    });
    it('should throw error if secondNumber is string', () => {
      return pactum
        .spec()
        .post('/multiple')
        .withBody({ firstNumber: 123456789123, secondNumber: '2121' })
        .expectStatus(400);
    });
    it('should throw error if firstNumber is BigInt', () => {
      return pactum
        .spec()
        .post('/multiple')
        .withBody({ firstNumber: 1111111111111111111111111, secondNumber: 2 })
        .expectStatus(400);
    });
    it('should throw error if secondNumber is BigInt', () => {
      return pactum
        .spec()
        .post('/multiple')
        .withBody({ firstNumber: 2, secondNumber: 1111111111111111111111111 })
        .expectStatus(400);
    });
    it('should throw error if both firstNumber and secondNumber is BigInt', () => {
      return pactum
        .spec()
        .post('/multiple')
        .withBody({
          firstNumber: 1111111111111111111111111,
          secondNumber: 1111111111111111111111111,
        })
        .expectStatus(400);
    });
    it('should throw error if multiple of two numbers are too big', () => {
      return pactum
        .spec()
        .post('/multiple')
        .withBody({
          firstNumber: 9007199254740991,
          secondNumber: 10,
        })
        .expectStatus(400);
    });
    it('should throw error if multiple of two numbers are too big', () => {
      return pactum
        .spec()
        .post('/multiple')
        .withBody({
          firstNumber: 9007199254740991,
          secondNumber: 2,
        })
        .expectStatus(400);
    });
  });
});
