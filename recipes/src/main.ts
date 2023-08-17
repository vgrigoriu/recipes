import './app.css'
import App from './App.svelte'
import Ajv from "ajv"
import * as recipe_schema from "./assets/schema.json"
import type { OpenRecipe } from './lib/OpenRecipeFormat'

const app = new App({
  target: document.getElementById('app'),
})

const ajv = new Ajv()
const validate_recipe = ajv.compile<OpenRecipe>(recipe_schema)

const recipe: OpenRecipe = {
  recipe_name: "Sarmale",
  ingredients: [
    {"orez": {amounts: [{amount: 1, unit: "kg"}]}},
    {"carne tocată": {amounts: [{amount: "1/2", unit: "kg"}]}}
  ],
  steps: [
    {step: "învelește sarmalele în foi de varză"},
    {step: "fierbe-le."}
  ],
}

const is_valid = validate_recipe(recipe)

console.log(`is valid: ${is_valid}`)
console.log(validate_recipe.errors)

export default app
