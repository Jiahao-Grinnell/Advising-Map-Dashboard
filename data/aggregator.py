import pandas, json

# df = pandas.read_csv("data/data.csv", sep="\t")

# df = df.groupby(["s", "t"]).sum()
# df = df.reset_index()

# nodes = set(df["s"].tolist() + df["t"].tolist())
# finalnodes = []
# for n in nodes:
#     finalnodes.append({ "id": n })
# print(set(df["s"].tolist()))

# print(finalnodes)
# df.columns = ["source", "target", "value"]
# print(df.to_json(orient="records"))

# df = pandas.read_csv("data/data.csv", sep="\t")[["s", "n"]]
# df = df.groupby("s").sum()
# df = df.reset_index()
# df = df.sort_values(by=["n"], ascending=False)
# df["id"] = df["s"]
# df.columns = ["label", "value", "id"]

# print((df.to_json(orient="records")))

# df = pandas.read_csv("data/data.csv", sep="\t")
# df = df.fillna("Others")
# df = df.groupby(["e", "s"]).sum()
# df = df.reset_index()

# # Creating a nested dictionary
# data = {"name": "root", "children": []}

# # Looping through the DataFrame to populate the dictionary
# for e, s, value in zip(df["e"], df["s"], df["n"]):
#     e_exists = False
#     for category in data["children"]:
#         if category["name"] == e:
#             category["children"].append({"name": s, "value": value})
#             e_exists = True
#             break
#     if not e_exists:
#         data["children"].append({"name": e, "children": [{"name": s, "value": value}]})
# print(data)

# with open("data/data.csv", "r") as f:
#     for themes in f.readlines():
#         l = []
#         for theme in themes.split(", "):
#             l.append(theme.split(": ")[0])
#         print(l)


# df = pandas.read_csv("data/datamain.csv")
# df["s"] = df["s"].str.strip()
# df["t"] = df["t"].str.strip()
# df = df.groupby(["s", "t"]).sum()
# df = df.reset_index()
# nodes = [ {"id": x} for x in set(df["s"].tolist() + df["t"].tolist())]
# # print(nodes)

# df = df[["s", "t", "value"]]

# df.columns = ["source", "target", "value"]

# data = json.loads(df.to_json(orient="records"))

# unique_combinations = set()

# # Filter the data to remove circular links
# filtered_data = []
# for item in data:
#     source = item["source"]
#     target = item["target"]
#     combination = (source, target)
#     if combination not in unique_combinations:
#         unique_combinations.add(combination)
#         filtered_data.append(item)

# print(filtered_data)

df = pandas.read_csv("data/datamain.csv", sep="\t")
df = df.fillna(0)

print(df)
df.columns = ["value", "name"]
df = df.groupby(["name"]).sum().reset_index()

print(df.to_json(orient="records"))