from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer('all-MiniLM-L6-v2')

def match(user_input, group_data):
    user_vec = model.encode(user_input, convert_to_tensor=True)
    group_scores = []
    for group in group_data:
        vec = model.encode(group, convert_to_tensor=True)
        score = util.cos_sim(user_vec, vec).item()
        group_scores.append((group, score))
    return sorted(group_scores, key=lambda x: -x[1])