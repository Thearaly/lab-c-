#include <stdio.h>

int main() {
    int nums[5] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; i++) {
        if (nums[i] % 2 == 0) {
            printf("%d\n", nums[i]);
        }
    }
    return 0;
}
