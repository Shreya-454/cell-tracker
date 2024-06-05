import findMobile  from "../../assets/images/findMobile.webp"

const Find = () => {
  return (
    <div className=" mt-60 pt-2">
          <div className="container rounded-xl bg-no-repeat max-h-[391px] bg-center max-w-[1140px] bg-find ">
              <div className="flex flex-row flex-wrap -mx-3">
                  <img src={findMobile} alt="mobile" className="max-w-[556px] h-[668px] ms-4 -translate-y-24" />
              </div>
      </div>
    </div>
  )
}

export default Find
