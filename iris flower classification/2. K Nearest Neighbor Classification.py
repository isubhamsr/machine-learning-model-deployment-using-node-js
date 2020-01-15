# import module
from sklearn import datasets
from sklearn.neighbors import KNeighborsClassifier
import sys


# print description
# print(iris.DESCR)

# load dataset
iris = datasets.load_iris()
# featurs and lebels
featurs = iris.data
lebel = iris.target

# print feartures and lebels
#print(featurs[0], lebel[0])

# tranning the classifier
clis = KNeighborsClassifier()

# fit the classifier
clis.fit(featurs,lebel)

# def iris(l1,l2,l3,l4):
# prediction
pred = clis.predict([[float(sys.argv[1]),float(sys.argv[2]),float(sys.argv[3]),float(sys.argv[4])]])
print(pred)

# iris(int(sys.argv[1]),int(sys.argv[2]),int(sys.argv[3]),int(sys.argv[4]))