first = input("1st Number: ")
second = input("2nd Number: ")
operation = input("operation: ")


if operation == 'addition' or operation == '+' or operation == 'Addition' or  operation == 'Add' or operation == 'add':
   add = int(first) + int(second)
   print(add)


if operation == 'subtraction' or operation == '-' or operation == 'Subtraction' or operation == 'Subtract' or operation == 'subtract':
   sub = int(first) - int(second)
   print(sub)


if operation == 'multiplication' or operation ==  '*' or operation == 'Multiplication' or operation == 'Multiply' or operation == 'multiply':
   mult = int(first) * int(second)
   print(mult)


if operation == 'division' or operation == '/' or operation == 'Division' or operation == 'Division' or operation == 'divide':
   div = int(first) / int(second)
   print(div)