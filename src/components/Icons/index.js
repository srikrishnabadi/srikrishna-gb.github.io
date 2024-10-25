import { Bio } from "../../data/constants";
import leetcodeImage from "./leetcode-svgrepo-com.svg";
import codingNinjasImage from "./codingninjas-svgrepo-com.svg";
import linkedinImage from "./linkedin-svgrepo-com.svg";
import githubImage from "./github-svgrepo-com.svg";

export function LoadProfileIcons() {
  return (
    <div style={{ display: "flex", gap: "1.5rem" }}>
      <style>
        {`
      .profile-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: transform 0.3s, color 0.3s;
      }
    
      .profile-link:hover {
        transform: scale(1.1);
        color: red; 
      }
    
      .profile-image {
        width: 25px;
        height: 25px;
        transition: opacity 0.3s;
      }
    
      .profile-link:hover .profile-image {
        opacity: 0.8; 
        color: red;
      }
    `}
      </style>
      <a
        href={Bio.leetcode}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-link"
      >
        <img src={leetcodeImage} alt="LeetCode" className="profile-image" />
      </a>
      <a
        href={Bio.codingNinja}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-link"
      >
        <img
          src={codingNinjasImage}
          alt="Coding Ninjas"
          className="profile-image"
        />
      </a>
      <a
        href={Bio.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-link"
      >
        <img src={linkedinImage} alt="LinkedIn" className="profile-image" />
      </a>
      <a
        href={Bio.GitHub}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-link"
      >
        <img src={githubImage} alt="Github" className="profile-image" />
      </a>
    </div>
  );
}
