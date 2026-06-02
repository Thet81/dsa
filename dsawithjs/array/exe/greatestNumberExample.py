# greatestNumberExample.py

def greatestNumber (array):
	for i in array:
		isValidTheGreatest = True

		for j in array:

			if j > i:
				isValidTheGreatest = False

		if isValidTheGreatest:
			return i

# linear solution
def efficientGreatest (array):
	greatestNum = array[0]

	for i in range(len(array)-1):

		if array[i+1] > greatestNum:
			greatestNum = array[i+1]

	return greatestNum

print(efficientGreatest([2,3,29,4,5]))