//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract OurTube {
    uint256 public videoCount = 0;
    string public name = "OurTube";
    mapping(uint256 => Video) public videos;

    struct Video {
        uint256 id;
        string hash;
        string title;
        address author;
    }

    event VideoUploaded(uint256 id, string hash, string title, address author);

    constructor(string memory _greeting) {
        console.log("Deploying OutTube:", _greeting);
    }

    function uploadVideo(string memory _videoHash, string memory _title)
        public
    {
        // Validating
        require(bytes(_videoHash).length > 0);
        require(bytes(_title).length > 0);
        require(msg.sender != address(0));

        videoCount++;
        videos[videoCount] = Video(videoCount, _videoHash, _title, msg.sender);
        emit VideoUploaded(videoCount, _videoHash, _title, msg.sender);
    }
}
