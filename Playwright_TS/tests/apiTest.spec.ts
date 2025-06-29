import { test, expect } from '@playwright/test';

test('Get Test', async ({ request }) => {
const response = await request.get('https://reqres.in/api/users/2');
const responseBody = await response.json();
expect(response.status()).toBe(200);
expect(responseBody.data.first_name).toBe('Janet');
expect(responseBody.support.text).toBe('Tired of writing endless social media content? Let Content Caddy generate it for you.');
});

test('Post Test', async ({ request }) => {

    const requestBody = {
    "name": "morpheus",
    "job": "leader"
}

const response = await request.post('https://reqres.in/api/users',{
    data: requestBody,
    headers: {
        "x-api-key": "reqres-free-v1"
    },
});
const responseBody = await response.json();
expect(response.status()).toBe(201);
expect(responseBody.name).toBe(requestBody.name);
expect(responseBody.job).toBe(requestBody.job);
});

test('Put Test', async ({ request }) => {

    const requestBody = {
    "name": "vignesh",
    "job": "playwrightTrainer"
}

const response = await request.put('https://reqres.in/api/users/2',{
    data: requestBody,
    headers: {
        "x-api-key": "reqres-free-v1"
    },
});
const responseBody = await response.json();
expect(response.status()).toBe(200);
expect(responseBody.name).toBe(requestBody.name);
expect(responseBody.job).toBe(requestBody.job);
});

test('Delete Test', async ({ request }) => {

const response = await request.delete('https://reqres.in/api/users/2',{
    headers: {
        "x-api-key": "reqres-free-v1"
    },
});
expect(response.status()).toBe(204);
});

// Assignement
// https://petstore.swagger.io/#/