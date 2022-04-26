import React, { useState } from 'react';
import { FaFolderOpen, FaFolder, FaPlus, FaEllipsisH } from 'react-icons/fa';
import { Stack, SelectPicker } from 'rsuite';
import InputGroup from '../../components/elements/Input/InputGroup';
import IconDropdown from '../../components/elements/IconDropDown';
import {
    MartCategories,
    testingSearch,
} from '../../components/SellerComponents/Info/Categories';
import TextAreaGroup from '../../components/elements/Input/TextAreaGroup';
import Folder2 from '../../assets/images/main/folder2.png';

//folders
const Folders = ({ name, num }) => {
    const [eventFunc, setEventFunc] = useState('');
    console.log(eventFunc);
    return (
        <div className="flex justify-between items-center min-w-[200px] relative px-4 m-2  h-24 border rounded-xl bg-blue-100 shadow-md">
            <i className="text-6xl text-blue-500">
                <img src={Folder2} alt="Brand" className="w-14" />
            </i>
            <i className="absolute top-2 right-2 w-6 h-3 bg-white rounded-full flex items-center justify-center text-xs text-slate-300 cursor-pointer">
                <IconDropdown
                    Icon={<FaEllipsisH />}
                    Content={[
                        { value: name + '-delete', name: 'Delete' },
                        { value: name + '-edit', name: 'Edit' },
                        { value: name + '-view', name: 'View' },
                    ]}
                    onClose={setEventFunc}
                    className="w-20"
                />
            </i>
            <div className="flex flex-col justify-evenly mt-3 h-full">
                <h5 className="font-bold">{name}</h5>
                <p className="text-xs">{num} products(s)</p>
            </div>
        </div>
    );
};

const Brand = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
    });
    const [selectedSub_Cate, setSub_Category] = useState('');
    const [selectedCate, setCategory] = useState([]);

    let newValue = {};
    function updateValue(newVal, variable) {
        console.log('lol');
        // eslint-disable-next-line no-lone-blocks

        variable === 'name' && (newValue = { fullname: newVal });
        variable === 'cate' && (newValue = { username: newVal });
        variable === 'about' && (newValue = { email: newVal });

        setFormData({
            ...formData,
            ...newValue,
        });
        console.log(formData);
    }
    console.log(selectedSub_Cate);
    const AllCate = MartCategories.map((res, index) => {
        return (
            <p
                key={index}
                className={`h-10 px-3 rounded-lg shadow ${
                    selectedSub_Cate === res
                        ? ' bg-slate-300 text-slate-900 shadow-lg'
                        : 'bg-slate-600 text-slate-100'
                } flex items-center cursor-pointer`}
                onClick={() => setSub_Category(res)}
            >
                {res}
            </p>
        );
    });

    return (
        <section className="relative mx-3">
            <div className="w-[calc(100%-280px)]">
                <div className="flex items-center h-40 relative overflow-x-auto w-full myScroll-x bg-slate-50 px-4 w-full border-4 border-slate-50">
                    <div className="flex justify-between items-center px-4 m-2 w-48 h-20 border min-w-[200px] rounded-lg bg-slate-50 shadow-sm">
                        <h5 className="text-gray-200 relative">
                            <FaFolderOpen className="text-6xl" />
                            <i className="text-sm w-6 h-6 bg-white rounded-full flex items-center justify-center absolute top-5 left-4">
                                <FaPlus />
                            </i>
                        </h5>
                        <div className="flex flex-col justify-evenly h-full">
                            <h5 className="font-bold text-gray-200">New</h5>
                        </div>
                    </div>
                    <Folders name="Folder 1" num="1" />
                    <Folders name="Folder 2" num="1" />
                    <Folders name="Folder 3" num="1" />
                    <Folders name="Folder 4" num="1" />
                    <Folders name="Folder 5" num="1" />
                    <Folders name="Folder 6" num="1" />
                    <Folders name="Folder 7" num="1" />
                    <Folders name="Folder 8" num="1" />
                </div>
                <div className=" px-5 flex justify-center items-center flex-col pt-5 w-full">
                    <div className="w-4/5">
                        <div className="w-full flex items-center">
                            <div className="w-1/2 m-1">
                                <InputGroup
                                    label="Brand name"
                                    name="name"
                                    placeholder=" "
                                    required={true}
                                    onChange={(e) =>
                                        updateValue(e.target.value, 'name')
                                    }
                                />
                            </div>
                            <div className="w-1/2 m-1">
                                <SelectPicker
                                    data={selectedCate}
                                    className="w-full bg-slate-100"
                                    size="lg"
                                    placeholder="Select Collection"
                                />
                            </div>
                        </div>
                        <div className="w-full flex items-center">
                            <div className="w-1/2 m-1">
                                <SelectPicker
                                    data={selectedCate}
                                    className="w-full bg-slate-100"
                                    size="lg"
                                    placeholder="Sub-category"
                                />
                            </div>
                            <div className="w-1/2 m-1">
                                {/* <SelectPicker
                                    data={testingSearch}
                                    className="w-full bg-slate-100"
                                    size="lg"
                                    placeholder="Select Collection"
                                /> */}
                            </div>
                        </div>
                        <div className="w-full m-1">
                            <TextAreaGroup
                                label="Give a short note"
                                placeholder=" "
                                required={true}
                                onChange={(e) =>
                                    updateValue(e.target.value, 'about')
                                }
                            />
                        </div>
                    </div>

                    <div className="mt-4 w-4/5">
                        <label className="block text-sm font-bold text-slate-700 tracking-wider mb-1">
                            Collection category
                            <span className="text-red-600 dark:text-red-500">
                                *
                            </span>
                        </label>
                        <Stack wrap spacing={6}>
                            {AllCate}
                        </Stack>
                    </div>
                </div>
                <div className="flex justify-center mt-10 pb-20">
                    <button className="text-center w-[300px] h-10 rounded bg-slate-600 text-white font-bold text-md">
                        Create Collection
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Brand;
