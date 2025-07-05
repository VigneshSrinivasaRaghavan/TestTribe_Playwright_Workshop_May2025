import { Before, BeforeAll, BeforeStep, After, AfterAll, AfterStep, Given, Then, When } from "@cucumber/cucumber";

Given('I am on the Page A', async function () {
    console.log("Page A")
});

When('I am on the Page B', async function () {
    console.log("Page B")
});

When('I am on the Page C', async function () {
    console.log("Page C")
});

Then('I am on the Page D', async function () {
    console.log("Page D")
});

Given('I am on the Page E', async function () {
    console.log("Page E")
});

When('I am on the Page F', async function () {
    console.log("Page F")
});

When('I am on the Page G', async function () {
    console.log("Page G")
});

Then('I am on the Page H', async function () {
    console.log("Page H")
});

Before(async function(){
    console.log("Before Block")
});

BeforeAll(async function(){
    console.log("Before All Block")
});

BeforeStep(async function(){
    console.log("Before Step Block")
});

After(async function(){
    console.log("After Block")
});

AfterAll(async function(){
    console.log("After All Block")
});

AfterStep(async function(){
    console.log("After Step Block")
});