import { test, expect } from '@playwright/test';

test.describe('Navigation and Layout Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/StreakBeacon/);
  });

  test('should navigate to all main routes', async ({ page }) => {
    // Test homepage elements
    await expect(page.getByRole('heading', { name: /Shine a light on your progress/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Start Tracking/i })).toBeVisible();

    // Test navigation to Dashboard
    await page.getByRole('link', { name: /Dashboard/i }).click();
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.getByRole('heading', { name: /Dashboard/i })).toBeVisible();

    // Test navigation to Settings
    await page.getByRole('link', { name: /Settings/i }).click();
    await expect(page).toHaveURL(/.*settings/);
    await expect(page.getByRole('heading', { name: /Settings/i })).toBeVisible();

    // Test navigation back to Home
    await page.getByRole('link', { name: /Home/i }).click();
    await expect(page).toHaveURL(/.*\//);
  });

  test('theme toggle should work', async ({ page }) => {
    // Open theme dropdown
    await page.getByRole('button', { name: /Toggle theme/i }).click();
    
    // Select dark theme
    await page.getByRole('menuitem', { name: /Dark/i }).click();
    await expect(page.locator('html')).toHaveAttribute('class', /dark/);

    // Select light theme
    await page.getByRole('button', { name: /Toggle theme/i }).click();
    await page.getByRole('menuitem', { name: /Light/i }).click();
    await expect(page.locator('html')).not.toHaveAttribute('class', /dark/);
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByRole('link', { name: /Start Tracking/i })).toBeVisible();
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByRole('link', { name: /Start Tracking/i })).toBeVisible();
    
    // Test desktop view
    await page.setViewportSize({ width: 1440, height: 900 });
    await expect(page.getByRole('link', { name: /Start Tracking/i })).toBeVisible();
  });

  test('should handle non-existent routes', async ({ page }) => {
    await page.goto('/non-existent-page');
    // TODO: Add 404 page test once implemented
    // await expect(page.getByRole('heading', { name: /404/i })).toBeVisible();
  });
}); 