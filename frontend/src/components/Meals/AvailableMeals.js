import Card from '../UI/Card'
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Pizza',
    description: 'Double Cheese burst Pizza',
    price: 229,
  },
  {
    id: 'm2',
    name: 'Pav Bhaji',
    description: 'Spicy vegetable curry with buttery buns.',
    price: 160,
  },
  {
    id: 'm3',
    name: 'Biryani',
    description: 'Aromatic rice dish with flavorful spices.',
    price: 120,
  },
  {
    id: 'm4',
    name: 'Samosa',
    description: 'Crispy pastry filled with spiced ingredients.',
    price: 18,
  },
  {
    id: 'm5',
    name: 'Beer',
    description: 'Alcoholic beverage made from fermentation.',
    price: 200,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => 
  <MealItem
  key={meal.id}
  id={meal.id}
  name={meal.name}
  description={meal.description}
  price={meal.price}


  />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;