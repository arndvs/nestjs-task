// use class for DTOs rather than interfaces
// classes are preserved at runtime, interfaces are not
export class CreateTaskDto {
  title: string;
  description: string;
}
