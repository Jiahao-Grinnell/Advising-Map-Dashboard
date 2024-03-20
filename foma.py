# import pandas

# df = pandas.read_csv("foma.csv", sep="\t")
# df = df.groupby("e").sum()
# df = df.reset_index()

# df["label"] = df["e"].str.strip()
# df["id"] = df["e"]
# df["value"] = round(df["n"]*100 / df["n"].sum(),1)

# df=df[["label", "value"]]
# df=df.sort_values(by=["value"], ascending=False)

# print(df.to_json(orient="records"))

# dat = {
#     "Enhanced Academic and Registration Processes": 9,
#     "Adviser Support and Development": 6,
#     "Diversity and Inclusion Initiatives": 7,
#     "Career and Alumni Resources": 5,
#     "Communication and Engagement": 5,
#     "Specialized Student Support": 12,
#     "Additional Concerns": 4,
# }

# total = 0
# for k in dat.keys():
#     total += dat[k]


# res = []
# for k in dat.keys():
#     dat[k] = round(dat[k] * 100 / total, 1)

#     res.append({"id":k, "label":k, "value":dat[k]})

# print(res)

{
    "Enhanced Academic and Registration Processes" : {
        "Effective Course Registration and Engagement with Advisees/Overhaul of Registration Process": 4,
        "More Department-Specific Advice (e.g., Anthropology) from CLS": 2,
        "Equitable Distribution of Advisees": 2,
        "Communication between Faculty and Registrar's Office": 1,
    },

    "Adviser Support and Development": {
        "More Authority for Faculty and Other Advisers": 2,
        "More Formal Training for Faculty Advisers": 2,
        "Recognition and Compensation for Different Advising Roles": 1,
        "More Manageable Workload to Allow Space and Time for 1:1 Interactions": 1,
    },

    "Diversity and Inclusion Initiatives" : {
        "Targeted Advice for International Students - New to Liberal Arts": 2,
        "Low Student Diversity in STEM": 1,
        "Faculty of Color, Especially Women of Color": 1,
        "More Access to MAPs, Independent Studies for Every Student Who Wants One - Particularly Domestic Students of Color": 1,
        "Resources for Students of Color": 1,
        "Support for Students Navigating Office Hours and Faculty Access": 1,
    },

    "Career and Alumni Resources" : {
        "Alumni - Access and Records": 3,
        "Better Internship Advising": 1,
        "Updated Resources and Training for Post-Grinnell Advising (Grad-School, Career, Research, etc.)": 1,
    },

    "Communication and Engagement" : {
        "Engaging More with Academic Advising": 1,
        "Communication between Students' Multiple Advisors": 1,
        "Advisees Served by Faculty Who Have Not Taught Tutorial": 1,
        "More for Non-Traditional Students": 1,
        "More FYE (First Year Experience)": 1,
    },

    "Specialized Student Support" : {
        "Assist Students with Impairments and Mental Health Needs": 1,
        "More Support for Major Advising and Major Departments": 1,
        "More Help for Non-Native English Speakers": 1,
        "Support for Students Transitioning into 2nd Year": 1,
        "More Time": 1,
        "Greater Support for Students Interested in Pursuing Linguistics in Post-Grad Institutions": 1,
        "First-Gen New to Liberal Arts Goals": 1,
        "System to Identify First-Year Students Interested in Studio Art Major": 1,
        "More Formal Familiarization with Grinnell Culture": 1,
        "Faculty Are Not Having Difficult Conversations with Students about Broad Liberal Arts Curriculum": 1,
        "More Staffing in Academic Advising Office": 1,
        "Overburden of AAs (Especially in Bucksbaum)": 1,
    },

    "Additional Concerns" : {
        "Service = Very Challenging": 1,
        "Academic Records Very Scattered": 1,
        "Cannot Think of Anything in Particular": 1,
        "More Support for Major Departments with Many Majors or Departments with Many Faculty Members Teaching Tutorial": 1,
    }
}