import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterObjectPipe<T> implements PipeTransform {

  transform(input: T[], filterBy: string, ...properties: string[]): T[] {
    const result: T[] = [];

    input.forEach((obj: T) => {
      const tested = (obj as any);
      const filterByLowerCase: string = filterBy.toLowerCase();

      for (let i = 0; i < properties.length; i++) {
        const property: string = properties[i];

        if (Object.hasOwn(tested, property)) {
          if (typeof tested[property] === "string") {
            if ((tested[property] as string).toLowerCase().indexOf(filterByLowerCase) > -1) {
              result.push(obj);
              break;
            }
          }
        }
      }
    });

    return result;
  }
}
