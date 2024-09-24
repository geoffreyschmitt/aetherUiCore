import { classNames } from './classNames';

describe('Test classNames utility', () => {
  test('should handle single class', () => {
    const classes = classNames('class');

    expect(classes).toBe('class');
  });

  test('should remove leading or trailing whitespace from classes.', () => {
    const classes = classNames(' class1', 'class2 ', ' class3 ');

    expect(classes).toBe('class1 class2 class3');
  });

  test('should concatenate class names from an object', () => {
    const classes = classNames({
      class: true,
      class2: true,
    });

    expect(classes).toBe('class class2');
  });

  test('should handle class names from an object with truthy and falsy values', () => {
    const classes = classNames({
      class1: true,
      class2: false,
      class3: true,
      class4: false,
    });

    expect(classes).toBe('class1 class3');
  });

  test('should handle all false values in class object', () => {
    const classes = classNames({
      class1: false,
      class2: false,
      class3: false,
    });

    expect(classes).toBe('');
  });

  it('should concatenate class names from an array', () => {
    const additionalClasses = 'extra-class';
    const result = classNames(
      'one',
      { two: true, three: false },
      'four',
      additionalClasses,
    );
    expect(result).toBe('one two four extra-class');
  });

  test('should handle empty class object', () => {
    const classes = classNames({});

    expect(classes).toBe('');
  });

  test('should handle undefined / null values in class object', () => {
    const classes = classNames({
      class1: undefined,
      class2: null,
    });

    expect(classes).toBe('');
  });

  test('should handle undefined / null values ', () => {
    const class1 = undefined;
    const class2 = null;

    const classes = classNames(class1, class2);

    expect(classes).toBe('');
  });

  test('should generate the correct class string with dynamic keys', () => {
    const variant = 'variant';
    const className = 'custom-class';

    const alertClasses = classNames({
      class: true,
      [`class--${variant}`]: true,
      [className]: className,
    });

    expect(alertClasses).toBe('class class--variant custom-class');
  });
});
