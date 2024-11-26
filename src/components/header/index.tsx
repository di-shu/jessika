import Container from "@components/common/container";
import ringIcon from "@assets/icons/ring.svg";
import profileIcon from "@assets/icons/profile.svg";

function Header() {
  return (
    <header className="py-4 bg-white border-b">
      <Container>
        <div className="flex items-center">
          <span className="text-xl font-bold text-blue-600">SLP AI Helper</span>
          <div className="w-5 h-5 ml-auto mr-4">
            <img
              src={ringIcon}
              className="w-full h-full cursor-pointer"
              alt="ring"
            />
          </div>
          <div className="w-8 h-8">
            <img
              src={profileIcon}
              className="w-full h-full cursor-pointer"
              alt="profile"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
