pragma solidity ^0.8.20;

contract ChainPulseRegistry {
    address public owner;
    uint256 public communityCount;
    uint256 public eventCount;

    enum EventStatus {
        Upcoming,
        Live,
        Completed
    }

    struct Community {
        uint256 id;
        string name;
        uint256 members;
        string region;
        uint256 growthPercentage;
        string focus;
        bool active;
    }

    struct CommunityEvent {
        uint256 id;
        string name;
        string location;
        uint256 attendees;
        EventStatus status;
        string followUp;
        bool active;
    }

    mapping(uint256 => Community) public communities;
    mapping(uint256 => CommunityEvent) public communityEvents;

    event CommunityAdded(uint256 indexed communityId, string name);
    event CommunityUpdated(uint256 indexed communityId, uint256 members, uint256 growthPercentage);
    event EventAdded(uint256 indexed eventId, string name);
    event EventStatusUpdated(uint256 indexed eventId, EventStatus status);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can update ChainPulse");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addCommunity(
        string memory name,
        uint256 members,
        string memory region,
        uint256 growthPercentage,
        string memory focus
    ) external onlyOwner {
        communityCount++;

        communities[communityCount] = Community({
            id: communityCount,
            name: name,
            members: members,
            region: region,
            growthPercentage: growthPercentage,
            focus: focus,
            active: true
        });

        emit CommunityAdded(communityCount, name);
    }

    function updateCommunityStats(
        uint256 communityId,
        uint256 members,
        uint256 growthPercentage
    ) external onlyOwner {
        require(communities[communityId].active, "Community does not exist");

        communities[communityId].members = members;
        communities[communityId].growthPercentage = growthPercentage;

        emit CommunityUpdated(communityId, members, growthPercentage);
    }

    function addEvent(
        string memory name,
        string memory location,
        uint256 attendees,
        EventStatus status,
        string memory followUp
    ) external onlyOwner {
        eventCount++;

        communityEvents[eventCount] = CommunityEvent({
            id: eventCount,
            name: name,
            location: location,
            attendees: attendees,
            status: status,
            followUp: followUp,
            active: true
        });

        emit EventAdded(eventCount, name);
    }

    function updateEventStatus(uint256 eventId, EventStatus status) external onlyOwner {
        require(communityEvents[eventId].active, "Event does not exist");

        communityEvents[eventId].status = status;

        emit EventStatusUpdated(eventId, status);
    }

    function getCommunity(uint256 communityId) external view returns (Community memory) {
        require(communities[communityId].active, "Community does not exist");
        return communities[communityId];
    }

    function getEvent(uint256 eventId) external view returns (CommunityEvent memory) {
        require(communityEvents[eventId].active, "Event does not exist");
        return communityEvents[eventId];
    }
}
