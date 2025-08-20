export interface Ingredient {
  name: string;
  amount: string;
}

export interface Instruction {
  step: number;
  name: string;
}

export interface RecipeSummary {
  _id: string;
  title: string;
  photos: {
    url: string;
    caption: string;
  }[];
  description: string;
  tags: string[];
  mealType: string;
  cuisine: string;
  rating: number;
}

export interface RecipeFull extends RecipeSummary {
  ingredients: Ingredient[];
  instructions: Instruction[];
  prepTime: string;
  cookTime: string;
  notes?: string;
}

// Export a type that includes both RecipeSummary and RecipeFull
export type Recipe = RecipeSummary | RecipeFull;
