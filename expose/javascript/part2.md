Q1) Line 12 returns 2, it is the length of prices[].
    In the for loop, it change the elements of prices[] by discounted value, 0.5.
    
Q2) It returns 150. It takes discountedPrice in for loop, which at the end takes last element of prices, 300 then multiply by (1-0.5).

Q3) It returns 150. finalPrice gets last element of discountedPrice, which is 150, and to the mathematical expression. 

Q4) It returns [50, 100, 150]. Inside the for loops, each element of prices[] gets halved and rounded up, yet nothing changes. The values then are pushed to discounted[].

Q5) It returns null since "i" is let variable inside for loop, it won't be accessed by line 12.

Q6) discountedPrice is let variable inside for loop, hence it cannot be accessed with line 13. Therefore it will return null.

Q7) Since finalPrice is outside the for loop, it can be accessed by line 14, therefore it will return 150.

Q8) IT returns [50, 150, 200].