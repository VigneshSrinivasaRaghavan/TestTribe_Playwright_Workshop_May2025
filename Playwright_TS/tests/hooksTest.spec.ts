import { test, expect } from '@playwright/test';

/*
test.beforeAll(async ({ browser }) => {
  console.log('Before All Block'); 
});

test.beforeEach(async ({ page }) => { 
  console.log('Login Block');
});

test('Test 1', async ({ page }) => {
  console.log('Add Items and Check out test');
});

test('Test 2', async ({ page }) => {
  console.log('Add Items and remove from Cart test');
});

test.afterEach(async ({ page }) => { 
  console.log('Logout Block');
});

test.afterAll(async ({ browser }) => { 
  console.log('After All Block');
});
*/

// Before All, Before Each, After Each, and After All hooks 
test.beforeAll('Before All Block', async ({ }) => {
  console.log('Before All Block');
});

test.beforeEach('Login Block', async ({ }) => { 
  console.log('Login Block');
});

test('Add Items and Check out test', async ({ }) => {
  console.log('Add Items and Check out test');
});

test('Add Items and remove from Cart test', async ({ }) => {
  console.log('Add Items and remove from Cart test');
});

test.afterEach('Logout Block', async ({ }) => { 
  console.log('Logout Block');
});

test.afterAll('After All Block', async ({ }) => { 
  console.log('After All Block');
});