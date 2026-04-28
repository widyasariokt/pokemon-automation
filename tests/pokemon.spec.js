import { test, expect } from '@playwright/test';

test('Automation Pokemon', async ({ page }) => {

  // Access website
  await page.goto('https://www.pokemon.com/us/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Click Pokedex
  await page.click('text=Pokedex');

  // Search Pikachu
  await page.fill('input[type="search"]', 'Pikachu');
  await page.keyboard.press('Enter');

  // Select Pikachu
  await page.click('text=Pikachu');

  // Scroll down to show Pikachu details
  await page.mouse.wheel(0, 3000);

  // Click Explore More Pokemon
  await page.click('text=Explore More Pokémon');

  // Scroll down to show all pokemon
  await page.mouse.wheel(0, 3000);

});