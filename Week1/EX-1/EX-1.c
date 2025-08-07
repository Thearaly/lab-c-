#include <stdio.h>

int main() {
    const char* name = "Alice";
    int age = 18;
    float height = 1.65;
    char grade = 'A';

    printf("Name: %s\n", name);
    printf("Age: %d\n", age);
    printf("Height: %.2f\n", height);
    printf("Grade: %c\n", grade);

    age = 19;
    height = 1.70;
    grade = 'A';

    printf("\nAfter changes:\n");
    printf("Age: %d\n", age);
    printf("Height: %.2f\n", height);
    printf("Grade: %c\n", grade);
    return 0;
}
