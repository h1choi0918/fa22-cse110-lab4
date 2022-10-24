Q1) Line 12 returns 2, it is the length of prices[].
    In the for loop, it change the elements of prices[] by discounted value, 0.5.
    
Q2) It returns 150. It takes discountedPrice in for loop, which at the end takes last element of prices, 300 then multiply by (1-0.5).

Q3) It returns 150. finalPrice gets last element of discountedPrice, which is 150, and to the mathematical expression. 

Q4) It returns [50, 100, 150]. Inside the for loops, each element of prices[] gets halved and rounded up, yet nothing changes. The values then are pushed to discounted[].

Q5) It returns null since "i" is let variable inside for loop, it won't be accessed by line 12.

Q6) discountedPrice is let variable inside for loop, hence it cannot be accessed with line 13. Therefore it will return null.

Q7) Since finalPrice is outside the for loop, it can be accessed by line 14, therefore it will return 150.

Q8) IT returns [50, 150, 200]. Since discounted is let variable inside the function, it can also be accessed by the for loop. The for loop takes elements of discountedPrices then save discounted prices into discounted[].

Q9) i is let variable inside the for loop, therefore it cannot be accessed outside the loop. Hence line 11 returns null.

Q10) line 12 returns 3. length is only used in line 4, declaration and line 12. At line 4 it declares length as prices.length = 3.

Q11) It returns []. Since discounted is const variable declared in line 3, it's content cannot be changed, hence it is an empty array.

Q12) 
    A: student.name
    B: student['Grad Year']
    C: student.greeting()
    D: student['Favorite Teacher'].name
    E: student.courseLoad[0]

Q13)
    A: 32           integer map to string representation
    B: 1            string is converted to integer 
    C: 3            null returns nothing
    D: 3null        null is converted as string representation
    E: 4            true maps to 1
    F: 0            false maps to 0, and null returns nothing
    G: 3undefined   undefined maps to string representation
    H: NaN          string and undefined both gives NaN in numeric conversion

Q14)
    A: true         string '2' becomes number 2
    B: false        two string comparison compares first character
    C: true         '2' becomes number 2
    D: false        two different data types returns fall.
    E: false        true is 1, 1 =/= 2
    F: true         both are boolean type true.

Q15) === checks the equality without type conversion. If different types are compared, it will automatically return false.


Q17) Inside modifyArray function, it creates newArr[]. In for loop, it calls doSomething function with elemnts of array and push to newArr[].
        doSomethings takes elements [1,2,3] and multiply by 2, so it returns 2,4,6, which are pushed to newArr.
        Hence, it returns newArr with values [2,4,6].


Q19) 
    1
    4
    3
    2