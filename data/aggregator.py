import pandas

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
# df["id"] = df["s"]
# df.columns = ["label", "value", "id"]

# print(df.to_json(orient="records"))

# df = pandas.read_csv("data/data.csv", sep="\t")
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


# themes = """Financial literacy: 1, Testing services/proctoring: 1, Development Opportunities for Students: 1, Workforce preparation vs PhD/post-grad: 1, Responsibility: 1, Accountability: 1, Demonstrated expertise: 1"""
# l = []
# for theme in themes.split(", "):
#     l.append(theme.split(": ")[0])
# print(l)