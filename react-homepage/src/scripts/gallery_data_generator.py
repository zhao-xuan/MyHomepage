#This script runs under the condition that the path variable is set correctly
import os

if __name__ == "__main__":
    # Remember to set path correctly
    json_string = ""
    path = "../picture"
    website_url = "https://tomzhao.me"
    for folder in sorted(os.listdir(path)):
        this_json_string = "const " + folder.split("/")[-1] + " = [\n"
        for file in sorted(os.listdir(path + "/" + folder)):
            this_image_string = ""
            this_image_string += "\t\toriginal: \"" + website_url + "/picture/" + folder + "/" +file + "\",\n"
            this_image_string += "\t\tthumbnail: \"" + website_url +  "/picture_thumb/" + folder + "/" + file + "\",\n"
            this_image_string += '\t\tdescription: "",\n'
            this_image_string += '\t\toriginalTitle: ""\n'
            this_json_string += "\t{\n" + this_image_string + "\t},\n"
        this_json_string += "]\n\n"
        json_string += this_json_string
    print(json_string)