import pandas as pd
import numpy as np

df = pd.read_csv("feedback.csv")

df = df.loc[:, 'Data Elements':'Datapoint Order']

group_nums = []

for i in df.groupby("Group Number").groups:
    group_nums.append(i)

n = len(group_nums)

#name = 'final_df'

df_0 = df.groupby("Group Number").get_group(group_nums[0])

for i in range(1, n):
    df_i = df.groupby("Group Number").get_group(group_nums[i])

    final = pd.DataFrame(np.concatenate([df_0.values, df_i.values]), columns=df_0.columns)

    print(final)

#final = final["Data Elements"]

#print(final)


'''
df1 = df.groupby("Group Number").get_group(1)

df2 = df.groupby("Group Number").get_group(3)

df3 = df.groupby("Group Number").get_group(4)

df4 = df.groupby("Group Number").get_group(7)

df5 = df.groupby("Group Number").get_group(8)

df6 = df.groupby("Group Number").get_group(9)

df7 = df.groupby("Group Number").get_group(12)

df8 = df.groupby("Group Number").get_group(17)

df9 = df.groupby("Group Number").get_group(23)

df10 = df.groupby("Group Number").get_group(24)

df11 = df.groupby("Group Number").get_group(25)

df12 = df.groupby("Group Number").get_group(37)

df13 = df.groupby("Group Number").get_group(72)


final = pd.DataFrame(np.concatenate([df1.values, df2.values, df3.values, df4.values, df5.values, df6.values, df7.values, df8.values, df9.values, df10.values, df11.values, df12.values, df13.values]), columns=df1.columns)

final = final["Data Elements"]

print(final)

final.to_csv('feedback_preprocessed.csv')
'''
