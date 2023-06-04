export const convertCamelCaseToTitleCase = (input: string): string => {
  let result = '';
  let shouldCapitalize = true;

  for (let i = 0; i < input.length; i++) {
    const character = input[i];
    if (i === 0 || shouldCapitalize) {
      result += character.toUpperCase();
      shouldCapitalize = false;
    } else if (character >= 'A' && character <= 'Z') {
      result += ' ' + character;
    } else {
      result += character;
    }

    if (character === ' ') {
      shouldCapitalize = true;
    }
  }

  return result;
};
